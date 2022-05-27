import qrcode

FLAG = "?"

def xorMatrix(mat1,mat2):
    size=len(mat1)
    ret=[[]for _ in range(size)]
    for y in range(size):
        for x in range(size):
            ret[y].append(mat1[y][x]^mat2[y][x])
    return ret

def getRotate90Matrix(mat):
    size=len(mat)
    ret=[[]for _ in range(size)]
    for y in range(size):
        for x in range(size):
            ret[y].append(mat[size-1-x][y])
    return ret

def printMatrix(mat):
    size=len(mat)
    for y in range(size):
        for x in range(size):
            print(0 if mat[y][x] else 1,end='')
        print("")


##### begin making QR
qr = qrcode.QRCode(border=0)
qr.add_data(FLAG)
qr.make(fit=True)
matrix = qr.get_matrix()
##### end making QR

matrix90 = getRotate90Matrix(matrix)
matrix180 = getRotate90Matrix(matrix90)

encryptedMatrix=xorMatrix(matrix,xorMatrix(matrix90,matrix180))

print(encryptedMatrix)
printMatrix(encryptedMatrix)
