from Crypto.Util.number import bytes_to_long,getStrongPrime,isPrime

flag = b"sctf{d353rts_of_pr1m3_numbers}"
m = bytes_to_long(flag)
p = getStrongPrime(512)
q = p+1
while not isPrime(q):
    q+=1

n = p*q
e = 0x10001

c = pow(m,e,n)

print(f"n = {hex(n)}")
print(f"e = {hex(e)}")
print(f"c = {hex(c)}")


