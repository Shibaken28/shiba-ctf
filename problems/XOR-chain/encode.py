from Crypto.Util.number import bytes_to_long,getStrongPrime
import random

flag = b"?"

m = bytes_to_long(flag)
r = [0]
N = 100

for i in range(N):
    r.append(random.randint(1,m))

r.append(m)
out = []
for i in range(len(r)-1):
    out.append(r[i]^r[i+1])

print(out)
