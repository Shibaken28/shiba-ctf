from Crypto.Util.number import bytes_to_long
import random

flag = b"?"
X = bytes_to_long(flag)
print(X*random.randint(100,1000))

