import os
from random import getrandbits
import hashlib
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Util.number import long_to_bytes

# secp256k1
bitsize = 256
p = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
a = 0
b = 7
Gx = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798
Gy = 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8
# exponent
d = getrandbits(128)
e2 = 65537

E = EllipticCurve(GF(p),[a,b])
G = E(Gx,Gy)
P = d*G
key = hashlib.sha256(long_to_bytes(int(P[0]))).digest()
Q = e2*P

m = b'?'
iv = os.urandom(16)
cipher = AES.new(key, AES.MODE_CBC, iv)
c = cipher.encrypt(pad(m,16))

print(f'Q = ({Q[0]},{Q[1]})')
print(f'c = {c.hex()}')
print(f'iv = {iv.hex()}')
