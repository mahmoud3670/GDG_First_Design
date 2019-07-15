Use Master ;
If Exists (Select*From Sys.databases Where Name='GDG_Project')
	Drop DataBase GDG_Project;
Create DataBase GDG_Project;
Go
USe GDG_Project;
                  ----الانشطه----
CREATE TABLE Activates  (
   Act_ID SMALLINT IDENTITY(1,1),
   Act_Name NVARCHAR(50) Not NULL,
   Act_Img NVARCHAR(250),
   Act_MinAge TINYINT Not Null,
   Act_Active BIT DEFAULT(1),
   Act_Description NVARCHAR(250),
   CONSTRAINT PK_Activates_Act_ID PRIMARY KEY(Act_ID),
   CONSTRAINT UN_Activates_Act_Name UNIQUE (Act_Name),
);
                ---- بيانات عامه عن الافراد ----
CREATE TABLE PersonInfo(
    P_ID INT IDENTITY(1,1),
    P_Name NVARCHAR(50) NOT NULL,
    P_BirthDate DATE NOT NULL,
    P_National_ID NVARCHAR(15) NOT NULL,
    P_Phone NVARCHAR(15) NOT Null,
    P_Img  NVARCHAR(250),
    p_Email NVARCHAR(100),
    P_Type CHAR(1) NOT NULL,
    P_Gender CHAR(1) NOT NULL,
    P_Address NVARCHAR(50) NOT NULL,
    P_StartDate DATE, 
    CONSTRAINT PK_PersonInfo_P_ID PRIMARY KEY (P_ID),
    CONSTRAINT UN_PersonInfo_P_National_ID UNIQUE (P_National_ID),
); 
                ----الاقسام ----
CREATE TABLE Department (
    Dep_ID SMALLINT IDENTITY(1,1),
    Dep_Name NVARCHAR(50) NOT NULL,
    CONSTRAINT PK_Department_Dep_ID PRIMARY KEY (Dep_ID)
);
                ----الموظفين----
CREATE TABLE Employees (
    Emp_ID INT IDENTITY(1,1),
    Emp_Info INT NOT NULL,
    Emp_Department SMALLINT NOT NULL,
    Emp_Salary FLOAT NOT NULL,
    Emp_UserName NVARCHAR(50),
    Emp_Password NVARCHAR(50),
    Emp_Active BIT DEFAULT(1),
    Emp_Postion SMALLINT DEFAULT(1),
    CONSTRAINT PK_Employees_Code PRIMARY KEY(Emp_ID)
    CONSTRAINT FK_Employees_Emp_ID FOREIGN KEY (Emp_Info) REFERENCES PersonInfo (P_ID) ,
    CONSTRAINT FK_Employees_Emp_Department FOREIGN KEY (Emp_Department) REFERENCES Department(Dep_ID),
    CONSTRAINT UN_Employees_Emp_UserName UNIQUE (Emp_UserName)
);
            ----المدربين ----
CREATE TABLE Trainer(
    Trainer_Code INT IDENTITY(1,1),
    Trainer_Info INT NOT NULL,
    Trainer_Act SMALLINT Not NULL,
    Trainer_Active BIT DEFAULT(1),
    Trainer_StartDay  DATE Not Null,
    CONSTRAINT PK_Trainer_Code PRIMARY KEY(Trainer_Code),
    CONSTRAINT FK_Trainer_Info FOREIGN KEY(Trainer_Info) REFERENCES PersonInfo (P_ID),
    CONSTRAINT FK_Trainer_Act FOREIGN KEY(Trainer_Act) REFERENCES Activates (Act_ID)
);
            ----المدارس ----
CREATE TABLE [dbo].[School] (
    [School_ID]            INT           IDENTITY (1, 1) NOT NULL,
    [School_Name]          NVARCHAR (50) NOT NULL,
    [School_Level]         NVARCHAR (50) NOT NULL,
    [School_Act]           SMALLINT      NOT NULL,
    [School_Price]         DECIMAL (18)  NOT NULL,
    [School_StartDay]      DATE          NOT NULL,
    [School_EndDay]        DATE          NOT NULL,
    [School_MaxTrainer]    SMALLINT      NOT NULL,
    [School_MaxMember]     SMALLINT      NOT NULL,
    [School_Days]          NVARCHAR (50) NOT NULL,
    [School_Active]        BIT            NOT NULL,
    [Trainer_Percent]      FLOAT (53)    NOT NULL,
    [School_Member_Count]  INT           DEFAULT ((0)) NULL,
    [School_Trainer_Count] INT           DEFAULT ((0)) NULL,
    
    CONSTRAINT [PK_School_ID] PRIMARY KEY CLUSTERED ([School_ID] ASC),
    CONSTRAINT [FK_School_Act] FOREIGN KEY ([School_Act]) REFERENCES [dbo].[Activates] ([Act_ID])
);

            ---- المتدربين ----
CREATE TABLE Members  (
    Member_Code  INT IDENTITY(1,1),
    Member_Info INT NOT NULL,
    Member_Act SMALLINT Not NULL,
    Member_Level NVARCHAR(50),
    Member_active BIT DEFAULT(1),
    CONSTRAINT PK_Member_Code PRIMARY KEY(Member_Code),
    CONSTRAINT FK_Member_Info FOREIGN KEY(Member_Info) REFERENCES PersonInfo (P_ID),
    CONSTRAINT FK_Member_Act FOREIGN KEY(Member_Act) REFERENCES Activates(Act_ID)
);
            ---- الاشتراكات ----
CREATE TABLE Payment (
    Pay_ID INT IDENTITY(1,1),
    Member_Code  INT NOT NULL,
    School_ID INT NOT NULL,
    Trainer_Code INT NOT NULL,
    Pay_Date  DATE Not NULL,
    Pay_DueDate DATE Not NULL,
    Pay_AmountPaid FLOAT NOT NULL,
    Pay_Discount FLOAT DEFAULT(0),
    Pay_Type SMALLINT DEFAULT(1),
    CONSTRAINT PK_Pay_ID PRIMARY KEY (Pay_ID),
    CONSTRAINT FK_Payment_Member_Code FOREIGN KEY(Member_Code) REFERENCES Members(Member_Code),
    CONSTRAINT FK_Payment_School_ID FOREIGN KEY(School_ID) REFERENCES School(School_ID),
    CONSTRAINT FK_Payment_Trainer_Code FOREIGN KEY(Trainer_Code) REFERENCES Trainer(Trainer_Code),
);
            -----البطولات---- 
CREATE TABLE Tournaments (
    Member_Info INT Not Null,
    Tour_Name NVARCHAR(50)Not Null,
    Tour_Description NText Not Null,
    Tour_Date DATE Not NULL,
    Member_img NVARCHAR(250)Not Null,
    Member_Level NVARCHAR(50)Not Null,
    Act_ID SMALLINT Not NULL,
    CONSTRAINT FK_Tour_Member_Info FOREIGN KEY(Member_Info) REFERENCES PersonInfo (P_ID),
    CONSTRAINT FK_Tour_Act_ID FOREIGN KEY(Act_ID)REFERENCES Activates(Act_ID)
);
CREATE TABLE TrainerSalary(
    Trainer_Code INT NOT NULL,
    School_ID INT NOT NULL,
    Member_Count INT DEFAULT(0),
    Salary_Date DATE Not NULL,
    Salary FLOAT DEFAULT (0),
    CONSTRAINT FK_TrainerSalary_School_ID FOREIGN KEY(School_ID) REFERENCES School(School_ID),
    CONSTRAINT FK_TrainerSalary_Trainer_Code FOREIGN KEY(Trainer_Code) REFERENCES Trainer(Trainer_Code),
);
CREATE TABLE TimeMachine(
    [Time_ID]   INT   IDENTITY (1, 1) ,
    Emp_ID INT NOT NULL,
    Time_In TIME NOT NULL,
    Time_Out TIME Not Null,
    Time_Date Date Not NULL,
    Note_Case SMALLINT ,
    CONSTRAINT [PK_TimeMachine] PRIMARY KEY (Time_ID),
    CONSTRAINT FK_TimeMachine_Emp_ID FOREIGN KEY(Emp_ID) REFERENCES Employees (Emp_ID),
);
CREATE TABLE LogEvent(
    LogID INT IDENTITY(1,1),
    EventName NVARCHAR(50) Not NULL,
    EventActor INT Not Null,
    EventReport NVARCHAR(250) Not Null,
    EventDate TIMESTAMP ,
    CONSTRAINT PK_LogEvent PRIMARY KEY(LogID),
    CONSTRAINT FK_LogEvent_EventActor FOREIGN KEY(EventActor) REFERENCES PersonInfo (P_ID),
);
Create TABLE ContactUs(
  CREATE TABLE ContactUs (
    [Message_ID]      INT  IDENTITY (1, 1) NOT NULL,
    [Anonyms_Name]    NVARCHAR (50) NOT NULL,
    [Anonyms_Email]   NVARCHAR (50) NULL,
    [Anonyms_Phone]   NVARCHAR (50) NOT NULL,
    [Anonyms_Message] NText          NOT NULL,
    [opend] BIT NOT NULL, 
    [Message_Date] DATETIME NOT NULL, 
    CONSTRAINT [PK_ContactUs] PRIMARY KEY([Message_ID])
);

,
);