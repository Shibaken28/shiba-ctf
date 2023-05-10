from gmpy2 import iroot
from random import getrandbits, randint

def verify(a):
    x = 1
    for i in range(1, a):
        x = (x * i) % a

    return x != 0


flag = "sctf{unl0cking_th3_myst3r13s_0f_f4ct0ri4ls_4nd_th3ir_3xtr4ordinary_pr0p3rt13s}"
dummy = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_{}"
c = ""
b = []

i = 0
while i < len(flag):
    a = getrandbits(28)
    b.append(a)
    if verify(a):
        c += flag[i]    
        i += 1
    else:
        r = randint(0, len(dummy) - 1)
        c += dummy[r]

print(f"b = {b}")
print(f"c = \"{c}\"")
