def nombre(cadena):
    if cadena[-3:] == '.py' and len(cadena[:-3]) >= 1 and ord(cadena[0]) >= 65:
        for x in range (len(cadena[:-3])):
            nOrd = ord(cadena[x])
            if not(nOrd >= 48 and nOrd <= 57 or nOrd >=65 and nOrd <= 90 or nOrd == 95 or nOrd >= 97 and nOrd <= 122):
                return False
        return True
    else:
        return False

print(nombre('2!_sp.py'))