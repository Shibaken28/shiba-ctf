from gmpy2 import iroot
from Crypto.Util.number import long_to_bytes, bytes_to_long, getPrime

m = bytes_to_long(b"?")
p = getPrime(1024)
q = getPrime(1024)
n = p * q

e1 = getPrime(20)
e2 = getPrime(20)

c1 = pow(m, e1, n)
c2 = pow(m, e2, n)
c3 = pow(m, e1*e2, n)

print(f"n = {n}")
print(f"c1 = {c1}")
print(f"c2 = {c2}")
print(f"c3 = {c3}")

