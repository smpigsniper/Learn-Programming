use tutorial;
CREATE TABLE Employee (
    employee_id INT NOT NULL AUTO_INCREMENT,
    employee_name VARCHAR(255) NOT NULL,
    employee_password VARCHAR(255) NOT NULL,
    CONSTRAINT PK_Employee PRIMARY KEY (employee_id, employee_name)
);

CREATE TABLE SALES_M (
    invoice_no varchar(255) NOT NULL PRIMARY KEY,
    sales_datetime datetime NOT NULL,
    employee_id int NOT NULL
);

CREATE TABLE SALES_D (
    invoice_no VARCHAR(255) NOT NULL,
    item_id INT NOT NULL,
    qty INT NOT NULL,
    sales_price decimal(8, 2)
);

CREATE TABLE ITEM (
    id INT NOT NULL PRIMARY KEY,
    item_name VARCHAR(255),
    item_price decimal(8, 2),
    create_by VARCHAR(255),
    create_at datetime
);