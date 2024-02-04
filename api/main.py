import pyodbc
import json
from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from typing import Generic, TypeVar
from pydantic import BaseModel
# Tạo API
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

T = TypeVar('T')
class ResponseModel(Generic[T]):
    status : bool
    data : T
    def __init__(self, status, data):
        self.status = status
        self.data = data

class CommandResponseModel(BaseModel):
    isSuccess : bool


class Product(BaseModel):
    productName : str
    productPrice : int
    productDetails : str
    productRate : int
    img : str

class User(BaseModel):
    username: str
    password: str


@app.get("/",status_code=status.HTTP_202_ACCEPTED,description = 'Hello Wordl',tags=['Hello'])
async def root():
    return "Chào bạn, hãy truy cập http://127.0.0.1:8000/docs để xem hướng dẫn sử dụng Api"

# burgers route
@app.post('/users')
async def login(request: User):
    conn = pyodbc.connect("DRIVER={SQL Server};Server=DESKTOP-AHR7HDN\SQLEXPRESS;Database=Mydata;Trusted_Connection=yes;")
    query = f"SELECT [username] AS Username, [password] AS Password FROM [dbo].[users]  where username = '{request.username}' and password = '{request.password}'"
    cursor = conn.cursor()
    cursor.execute(query)  
    results = cursor.fetchall()
    return len(results) > 0
        
    
@app.get('/products')
async def getProduct():
    conn = pyodbc.connect("DRIVER={SQL Server};Server=DESKTOP-AHR7HDN\SQLEXPRESS;Database=Mydata;Trusted_Connection=yes;")
    query = "SELECT [id] AS Id ,[product_name] AS ProductName ,[product_price] AS productPrice ,[product_details] AS ProductDetails ,[product_rate] AS ProductRate ,[img] AS Img  FROM [dbo].[product]" # Dòng này thực hiện truy vấn và trả về json
    cursor = conn.cursor()
    cursor.execute(query)  
    columns = [column[0] for column in cursor.description]
    results = []
    for row in cursor.fetchall():
        results.append(dict(zip(columns, row)))
    
    response = ResponseModel(True, results)
    return response

@app.post('/products')
async def insertProduct(request: Product):
    print(request)

    conn = pyodbc.connect("DRIVER={SQL Server};Server=DESKTOP-AHR7HDN\SQLEXPRESS;Database=Mydata;Trusted_Connection=yes;")
    query = f"INSERT INTO [dbo].[product] ([product_name], [product_price], [product_details], [product_rate], [img])  VALUES ('{request.productName}', '{request.productPrice}', '{request.productDetails}', {request.productRate}, '{request.img}')" # Dòng này thực hiện truy vấn và trả về json

    cursor = conn.cursor()
    cursor.execute(query)  
    conn.commit()
    conn.close()
    response = ResponseModel(True, True)
    return  response

@app.put('/products/id')
async def UpdateProduct(id: int, request: Product):

    conn = pyodbc.connect("DRIVER={SQL Server};Server=DESKTOP-AHR7HDN\SQLEXPRESS;Database=Mydata;Trusted_Connection=yes;")
    query = f"UPDATE [dbo].[product] SET [product_name] = '{request.productName}',[product_price] = '{request.productPrice}',[product_details] = N'{request.productDetails}',[product_rate] = '{request.productRate}',[img] = '{request.img}' WHERE id = '{id}'" 

    cursor = conn.cursor()
    cursor.execute(query)  

    if (cursor.rowcount == 0) :
        return ResponseModel(True, CommandResponseModel( isSuccess = False))

    conn.commit()
    conn.close()
    return  ResponseModel(True, CommandResponseModel( isSuccess = True))

@app.delete('/products/id')
async def UpdateProduct(id: int):

    conn = pyodbc.connect("DRIVER={SQL Server};Server=DESKTOP-AHR7HDN\SQLEXPRESS;Database=Mydata;Trusted_Connection=yes;")
    query = f"DELETE FROM [dbo].[product] WHERE id = '{id}'" 

    cursor = conn.cursor()
    cursor.execute(query)  
    if (cursor.rowcount == 0) :
        return ResponseModel(True, CommandResponseModel( isSuccess = False))

    conn.commit()
    conn.close()
    return  ResponseModel(True, CommandResponseModel( isSuccess = True))  









    










