from random import randint
from Crypto.Util.number import bytes_to_long, getPrime

PEOPLE = 30
exp = [7,11,13]
m = bytes_to_long(b"?")
pub = []

assert m.bit_length() >= 512 # Against Low Public Exponent Attack

for i in range(PEOPLE):
    p = getPrime(512)
    q = getPrime(512)
    n = p * q
    e = exp[randint(0,len(exp)-1)]
    c = pow(m, e, n)
    pub.append((n, e, c))

print(f"pub = {pub}")
