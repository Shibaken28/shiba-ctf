from Crypto.Util.number import bytes_to_long,getStrongPrime

flag = b"?"
X = bytes_to_long(flag)

def com(a,b):
    ret = 1
    for i in range(b):
        ret*=a-i
        ret//=i+1
    return ret

print(com(X,15))

