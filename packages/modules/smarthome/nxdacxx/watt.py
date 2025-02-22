#!/usr/bin/python3
import sys
import os
from pymodbus.client.sync import ModbusTcpClient
import logging
from smarthome.smartret import writeret

log = logging.getLogger("DAC")
bp = '/var/www/html/openWB/ramdisk/smarthome_device_'

devicenumber = int(sys.argv[1])
ipadr = str(sys.argv[2])
uberschuss = int(sys.argv[3])
maxpower = int(sys.argv[4])
forcesend = int(sys.argv[5])
port = int(sys.argv[6])
dactyp = int(sys.argv[7])
# forcesend = 0 default time period applies
# forcesend = 1 default overwritten send now
# forcesend = 9 default overwritten no send
file_stringpv = bp + str(devicenumber) + '_pv'
file_stringcount = bp + str(devicenumber) + '_count'
file_stringcount5 = bp + str(devicenumber) + '_count5'
count5 = 999
if os.path.isfile(file_stringcount5):
    with open(file_stringcount5, 'r') as f:
        count5 = int(f.read())
if (forcesend == 0):
    count5 = count5 + 1
elif (forcesend == 1):
    count5 = 999
else:
    count5 = 1
if count5 > 3:
    count5 = 0
with open(file_stringcount5, 'w') as f:
    f.write(str(count5))
modbuswrite = 0
neupower = uberschuss
if neupower < 0:
    neupower = 0
if neupower > maxpower:
    neupower = maxpower
volt = 0
pvmodus = 0
if os.path.isfile(file_stringpv):
    with open(file_stringpv, 'r') as f:
        pvmodus = int(f.read())
powerc = 0
aktpower = 0
if count5 == 0:
    count1 = 999
    if os.path.isfile(file_stringcount):
        with open(file_stringcount, 'r') as f:
            count1 = int(f.read())
    count1 = count1+1
    # wurde  gerade ausgeschaltet ?    (PV-Modus == 99 ?)
    # dann 0 schicken wenn kein PV-Modus mehr
    # und PV-Modus ausschalten
    if pvmodus == 99:
        modbuswrite = 1
        pvmodus = 0
        neupower = 0
        with open(file_stringpv, 'w') as f:
            f.write(str(pvmodus))
    # sonst wenn PV-Modus lauft , ueberschuss schicken
    else:
        if pvmodus == 1:
            modbuswrite = 1
    # log schreiben
    if count1 > 80:
        count1 = 0
    if count1 < 3:
        helpstr = 'devicenr %d ipadr %s ueberschuss %6d port %4d'
        helpstr += ' maxueberschuss %6d pvmodus %1d modbuswrite %1d'
        log.info(helpstr % (devicenumber, ipadr, uberschuss,
                 port, maxpower, pvmodus, modbuswrite))
    # modbus write
    if modbuswrite == 1:
        client = ModbusTcpClient(ipadr, port=port)
        if dactyp == 0:
            # 10 Volts are 1000
            volt = int((neupower * 1000) / maxpower)
            rq = client.write_register(1, volt, unit=1)
        elif dactyp == 1:
            # 10 volts are 4000
            volt = int((neupower * 4000) / maxpower)
            rq = client.write_register(0x01f4, volt, unit=1)
        elif dactyp == 2:
            volt = int((neupower * 4095) / maxpower)
            if volt < 370:
                volt = 370
            #  Ausgabe nicht kleiner 0,9V sonst Leistungsregelung der WP aus
            rq = client.write_register(0, volt, unit=1)
        elif dactyp == 3:
            ausgabe = int(((neupower * (4095-820)) / maxpower)+820)
            if ausgabe < 820:
                ausgabe = 0
            #  ausgabe nicht kleiner 4ma sonst Leistungsregelung der WP aus
            rq = client.write_register(0x01f4, ausgabe, unit=1)
        else:
            pass
        if count1 < 3:
            log.info('devicenr %d ipadr %s Volt %6d dactyp %d written by modbus ' %
                     (devicenumber, ipadr, volt, dactyp))
    with open(file_stringcount, 'w') as f:
        f.write(str(count1))
else:
    if pvmodus == 99:
        pvmodus = 0
answer = '{"power":' + str(aktpower) + ',"powerc":' + str(powerc)
answer += ',"send":' + str(modbuswrite) + ',"sendpower":' + str(volt)
answer += ',"on":' + str(pvmodus) + '}'
writeret(answer, devicenumber)
