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
);

CREATE TABLE S3_Sheets (
    SheetID int,
    SheetData longtext
);

CREATE TABLE Basketball_Player(
    PlayerID int,
    Jersey_No int,
    PlayerName varchar(255),
    FG_Attp int,
    FG_Made int,
    Three_PT_Att int,
    Three_PT_Made int,
    Shooting_Perc int,
    Three_Perc int,
    PTS_Scored int,
    Steals int, 
    Turnovers int,
    Def_Reb int,
    Off_Reb int,
    Blocks int,
    Assists int
);

CREATE TABLE Football_Player(
    PlayerID int,
    Jersey_No int,
    PlayerName varchar(255),
    Games_Started int,
    Games_Played int,
    Pass_Att int,
    Pass_Comp int,
    Comp_Perc FLOAT(2,1),
    Pass_TDs int,
    INTs int,
    Rec int,
    Rec_Yds int,
    Rec_TDs int,
    Drops int,
    Rush_Att int,
    Rush_Yds FLOAT(2,1),
    YPC FLOAT(2,1),
    YAC FLOAT(2,1),
    Rush_TDs int,
    Fumbles int,
    Fumble_TDs int,
    Pan_Blks int,
    Sks_Allowed int,
    Sacks FLOAT(2,1),
    Tkls int,
    TFLs int,
    Ast_Tkls int,
    Sfty int,
    Def_INTs int,
    Def_INT_Yds int,
    Def_TDs int
);

CREATE TABLE Employees (
    EmployeeID int,
    Name int,
    Yrs_At_Comp int,
    Start_Date Date, 
    Type VARCHAR(255)
);

CREATE TABLE Feedback_Reports (
    FeedBackID int,
    EmployeeID int,
    Ratings VARCHAR(255),
    FeedBack_Text VARCHAR(255)
);

CREATE TABLE Authentication (
    AuthID int,
    UserName VARCHAR(255),
    Pass VARCHAR(255),
    EmployeeID int
);

INSERT INTO Authentication (AuthID, UserName, Pass, EmployeeID)
VALUES (1, 'admin', 'admin', 1);