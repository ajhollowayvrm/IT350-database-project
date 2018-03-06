CREATE TABLE Customers (
    CustomerID int,
    CustomerName varchar(255),
    Number_of_Reports_Compiled int,
    Preferences varchar(255)
);

CREATE TABLE Orders (
    OrderID int,
    Man_Hours_to_Compile FLOAT(2,1),
    Price FLOAT(2,2)
)

CREATE TABLE S3_Sheets (
    SheetID int,
    SheetData longtext,
)

CREATE TABLE Player(
    PlayerID int,
    Jersey_No int,
    PlayerName varchar(255),
    
)