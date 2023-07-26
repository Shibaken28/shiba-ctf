from Crypto.Util.number import bytes_to_long

flag = 'sctf{???}'
assert flag[:5] == 'sctf{' and flag[-1] == '}'

e = bytes_to_long(flag[5:-1].encode()) # delete 'sctf{' and '}', then convert to integer
assert e < 10 ** 7 # not so big

c = pow(2, e)
print(str(c)[:7])
