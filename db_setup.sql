CREATE DATABASE admin_db;

USE admin_db;

CREATE TABLE Customers (
    CustomerID int,
    CustomerName varchar(255),
    Number_of_Reports_Compiled int,
    Preferences varchar(255)
);

CREATE TABLE Orders (
    OrderID int,
    CustomerID int,
    Man_Hours_to_Compile int,
    Price int,
    SheetID int
);

CREATE TABLE S3_Sheets (
    SheetID int,
    BB_PlayerIDs varchar(255),
    FB_PlayerIDs varchar(255)
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
    Comp_Perc int,
    Pass_TDs int,
    INTs int
);

CREATE TABLE Employees (
    EmployeeID int,
    Name int,
    Yrs_At_Comp int,
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

INSERT INTO Customers (CustomerID, CustomerName, Number_of_Reports_Compiled, Preferences)
VALUES (1, 'John', 4, "None");
INSERT INTO Customers (CustomerID, CustomerName, Number_of_Reports_Compiled, Preferences)
VALUES (2, 'Johnson Recruiting', 120, "None");
INSERT INTO Customers (CustomerID, CustomerName, Number_of_Reports_Compiled, Preferences)
VALUES (3, 'Cooper Tires', 6, "None");
INSERT INTO Customers (CustomerID, CustomerName, Number_of_Reports_Compiled, Preferences)
VALUES (4, 'Lucky Runnings', 60, "None");

INSERT INTO Orders (OrderID, CustomerID, Man_Hours_to_Compile, Price, SheetID)
VALUES (1, 3, 2, 105, 3);
INSERT INTO Orders (OrderID, CustomerID, Man_Hours_to_Compile, Price, SheetID)
VALUES (2, 2, 4, 180, 2);

INSERT INTO S3_Sheets(SheetID, BB_PlayerIDs, FB_PlayerIDs)
VALUES (1, "1,2,5", "None");
INSERT INTO S3_Sheets(SheetID, BB_PlayerIDs, FB_PlayerIDs)
VALUES (2, "2,5", "1");
INSERT INTO S3_Sheets(SheetID, BB_PlayerIDs, FB_PlayerIDs)
VALUES (3, "1,5", "2");

INSERT INTO Basketball_Player(PlayerID, Jersey_No, PlayerName, FG_Attp, FG_Made, Three_PT_Att, Three_PT_Made, Shooting_Perc, Three_Perc, PTS_Scored, Steals, Turnovers, Def_Reb, Off_Reb, Blocks, Assists)
VALUES (1, 20, "Jermaine Kearsey", 45, 12, 30, 14, 27, 47, 300, 3, 4, 6, 3, 4, 6);
INSERT INTO Basketball_Player(PlayerID, Jersey_No, PlayerName, FG_Attp, FG_Made, Three_PT_Att, Three_PT_Made, Shooting_Perc, Three_Perc, PTS_Scored, Steals, Turnovers, Def_Reb, Off_Reb, Blocks, Assists)
VALUES (2, 24, "Bern Holt", 45, 12, 30, 14, 27, 47, 300, 3, 4, 6, 3, 4, 6);
INSERT INTO Basketball_Player(PlayerID, Jersey_No, PlayerName, FG_Attp, FG_Made, Three_PT_Att, Three_PT_Made, Shooting_Perc, Three_Perc, PTS_Scored, Steals, Turnovers, Def_Reb, Off_Reb, Blocks, Assists)
VALUES (3, 6, "LeJohn Brames", 45, 12, 30, 14, 27, 47, 300, 3, 4, 6, 3, 4, 6);
INSERT INTO Basketball_Player(PlayerID, Jersey_No, PlayerName, FG_Attp, FG_Made, Three_PT_Att, Three_PT_Made, Shooting_Perc, Three_Perc, PTS_Scored, Steals, Turnovers, Def_Reb, Off_Reb, Blocks, Assists)
VALUES (4, 8, "Kobe O'bryant", 45, 12, 30, 14, 27, 47, 300, 3, 4, 6, 3, 4, 6);
INSERT INTO Basketball_Player(PlayerID, Jersey_No, PlayerName, FG_Attp, FG_Made, Three_PT_Att, Three_PT_Made, Shooting_Perc, Three_Perc, PTS_Scored, Steals, Turnovers, Def_Reb, Off_Reb, Blocks, Assists)
VALUES (5, 13, "Loranger Lewis", 45, 12, 30, 14, 27, 47, 300, 3, 4, 6, 3, 4, 6);

INSERT INTO Football_Player (PlayerID, Jersey_No, PlayerName, Games_Started, Games_Played, Pass_Att, Pass_Comp, Comp_Perc, Pass_TDs, INTs)
VALUES (1, "Vondrae Cordin", 4, 6, 5, 2, 4, 4, 2, 1);
INSERT INTO Football_Player (PlayerID, Jersey_No, PlayerName, Games_Started, Games_Played, Pass_Att, Pass_Comp, Comp_Perc, Pass_TDs, INTs)
VALUES (2, "Rich Io", 4, 6, 5, 2, 4, 4, 2, 1);
INSERT INTO Football_Player (PlayerID, Jersey_No, PlayerName, Games_Started, Games_Played, Pass_Att, Pass_Comp, Comp_Perc, Pass_TDs, INTs)
VALUES (3, "Porter Blue", 4, 6, 5, 2, 4, 4, 2, 1);
INSERT INTO Football_Player (PlayerID, Jersey_No, PlayerName, Games_Started, Games_Played, Pass_Att, Pass_Comp, Comp_Perc, Pass_TDs, INTs)
VALUES (4, "Quan Wright", 4, 6, 5, 2, 4, 4, 2, 1);
INSERT INTO Football_Player (PlayerID, Jersey_No, PlayerName, Games_Started, Games_Played, Pass_Att, Pass_Comp, Comp_Perc, Pass_TDs, INTs)
VALUES (5, "Neil Harris", 4, 6, 5, 2, 4, 4, 2, 1);

INSERT INTO Employees (EmployeeID, Name, Yrs_At_Comp, Type)
VALUES (1, "Spencer Lurio", 3, "Compiler");
INSERT INTO Employees (EmployeeID, Name, Yrs_At_Comp, Type)
VALUES (2, "Hans Lurio", 3, "Jamitor");
INSERT INTO Employees (EmployeeID, Name, Yrs_At_Comp, Type)
VALUES (3, "Yuriel Beal", 7, "Compiler");
INSERT INTO Employees (EmployeeID, Name, Yrs_At_Comp, Type)
VALUES (4, "Richie Mogre", 5, "Sales");
INSERT INTO Employees (EmployeeID, Name, Yrs_At_Comp, Type)
VALUES (5, "Chelsea Hartmound", 9, "Compiler");
