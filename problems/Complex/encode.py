from Crypto.Util.number import getPrime
from random import shuffle

params1 = []
params2 = []

def calc_next_d(x):
    for a,b in zip(params1,params2):
        x = a*x + b
    return x

for i in range(33):
    params1.append(getPrime(16))
    params2.append(getPrime(16))

m = "sctf{???????????????????????????????????}"
assert m.startswith("sctf{") and m.endswith("}")

c = []
d = 0

for a in m:
    d = calc_next_d(d)
    c.append( (ord(a) + d) % 65537)

shuffle(params1)
shuffle(params2)

print(f'c = {c}')
print(f'shuffled params1 = {params1}')
print(f'shuffled params2 = {params2}')
