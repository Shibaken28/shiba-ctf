from Crypto.Util.number import bytes_to_long,getStrongPrime

flag = b"?"
m = bytes_to_long(flag)
p = getStrongPrime(512)
q = getStrongPrime(512)
n = p*q
e = 0x10001

c = pow(m,e,n)

leak = (p>>222)<<222

print(f"leak = {hex(leak)}")
print(f"n = {hex(n)}")
print(f"e = {hex(e)}")
print(f"c = {hex(c)}")

