# DSA
from Crypto.Util.number import getPrime, inverse, bytes_to_long, long_to_bytes, getStrongPrime
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
from hashlib import sha256
from random import randint
from os import urandom

flag = b'?????????????????????????????'
q = getPrime(512)
p = q*q

g = q+1 # coprime to p

a = randint(1, p-1) # Alice's secret
b = randint(1, p-1) # Bob's secret

A = pow(g, a, p) # Alice's public key
B = pow(g, b, p) # Bob's public key

# Alice -> Bob
s = pow(B, a, p) # shared secret

# Bob -> Alice
r = pow(A, b, p) # shared secret

assert s == r

key = sha256(long_to_bytes(s)).digest()[:16]
iv = urandom(16)

cipher = AES.new(key, AES.MODE_CBC, iv)
ciphertext = cipher.encrypt(pad(flag, 16))

print(f"p = {p}")
print(f"g = {g}")
print(f"A = {A}")
print(f"B = {B}")
print(f"iv = {iv.hex()}")
print(f"ciphertext = {ciphertext.hex()}")
