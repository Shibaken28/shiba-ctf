from Crypto.Util.number import bytes_to_long,getStrongPrime

flag = b"?"
m = bytes_to_long(flag)
p = getStrongPrime(512)
q = getStrongPrime(512)
n = p*q
e = 3

c = pow(m,e,n)

print(f"n = {n}")
print(f"e = {e}")
print(f"c = {c}")


