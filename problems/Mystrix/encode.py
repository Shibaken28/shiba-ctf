from random import randint

flag = "sctf{Magical_Matrix_Melodies}"
key = "QuAdR4t1c"

assert len(key) == 9
assert flag.startswith("sctf{") and flag.endswith("}")

M = [[ord(c) for c in key[i:i+3]] for i in range(0, 9, 3)]

F = [[ord(c) for c in flag[i:i+3]] for i in range(0, len(flag), 3)]


# M * F = C
C = [[0, 0, 0] for _ in range(len(flag) // 3)]
for i in range(len(flag) // 3):
    for j in range(3):
        for k in range(3):
            C[i][j] += M[j][k] * F[i][k]
            C[i][j] %= 256

print("Ciphertext:", C)
