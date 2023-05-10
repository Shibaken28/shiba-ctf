from Crypto.Util.number import long_to_bytes, bytes_to_long, getPrime
from random import getrandbits

m = bytes_to_long(b"?")

g = getPrime(512)
p = getPrime(1024)

a = getrandbits(512)
b = getrandbits(512)
c = getrandbits(512)

s = (g * a * b) % p
t = (g * b * c) % p
u = (g * c * a) % p

v = g * (a*a + b*b + c*c) % p

ct = pow(m, v, p)

assert pow(ct, pow(v, -1, p - 1), p) == m

print(f"p = {p}")
print(f"s = {s}")
print(f"t = {t}")
print(f"u = {u}")
print(f"ct = {ct}")

