from Crypto.Util.number import bytes_to_long,getPrime
from random import getrandbits

flag = b"?"
m = bytes_to_long(flag)
p = getPrime(1024)
q = getPrime(1024)
n = p*q
e1 = getrandbits(128)
e2 = getrandbits(128)

c1 = pow(m,e1,n)
c2 = pow(m,e2,n)

print("n =",n)
print("e1 =",e1)
print("e2 =",e2)
print("c1 =",c1)
print("c2 =",c2)

