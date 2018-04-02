USE admin_db;

-- CREATE TABLE Actions (
--     ActionID int,
--     Act varchar(255)
-- );

SELECT * from `Customers`;

delimiter //
CREATE PROCEDURE customProc  
    BEGIN
        INSERT INTO Actions(ActionID, Act) VALUES (1, "Inserted Something");
    END//     
delimiter ;


CREATE TRIGGER "customTrigger" BEFORE INSERT ON Customers
FOR EACH ROW INSERT INTO Actions(ActionID, Act) VALUES (NEW.CustomerID, NEW.CustomerName) 