from gmpy2 import iroot
from Crypto.Util.number import long_to_bytes, bytes_to_long, getPrime

m = bytes_to_long(b"sctf{1241}")
p = getPrime(1024)
q = getPrime(1024)
n = p * q
e = 65537

c = m
for i in range(10):
    c = pow(c, e, n) + c

print(c)

# m^e + m
# m^e^e + m^e + m = m^2e + m^e + m