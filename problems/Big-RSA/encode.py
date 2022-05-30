from Crypto.Util.number import bytes_to_long,getStrongPrime
import random

flag = b"?"
m = bytes_to_long(flag)
p = getStrongPrime(512)
q = getStrongPrime(512)
n = p*q
d = random.randint(1,1<<120)

e = pow(d,-1,(p-1)*(q-1))
c = pow(m,e,n)

assert m == pow(c,d,n)

print(f"n = {n}")
print(f"e = {e}")
print(f"c = {c}")


