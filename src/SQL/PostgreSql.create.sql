﻿




CREATE TABLE Пользователь (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 ФИО VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 Транзакция UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Транзакция (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Дата TIMESTAMP(3) NULL,
 Время VARCHAR(255) NULL,
 Оплата VARCHAR(9) NULL,
 Сумма DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Посылка (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Статус VARCHAR(23) NULL,
 Отправитель VARCHAR(255) NULL,
 Получатель VARCHAR(255) NULL,
 Логистика UUID NOT NULL,
 Транзакция UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СлужбаДоставки (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Наименование VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 НомерТелефона VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Ячейка (
 primaryKey UUID NOT NULL,
 НомерЯчейки INT NULL,
 Транзакция UUID NOT NULL,
 Постамат UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Логистика (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Состояние VARCHAR(25) NULL,
 Информация VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Постамат (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 Адрес VARCHAR(255) NULL,
 Статус VARCHAR(10) NULL,
 СлужбаДоставки UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Пользователь ADD CONSTRAINT FK142c6306efec24312b1f6fd119035b54bcad7688 FOREIGN KEY (Транзакция) REFERENCES Транзакция; 
CREATE INDEX Index142c6306efec24312b1f6fd119035b54bcad7688 on Пользователь (Транзакция); 

 ALTER TABLE Посылка ADD CONSTRAINT FK41083a10e439db754a99a200793d2e87e143c47a FOREIGN KEY (Логистика) REFERENCES Логистика; 
CREATE INDEX Index41083a10e439db754a99a200793d2e87e143c47a on Посылка (Логистика); 

 ALTER TABLE Посылка ADD CONSTRAINT FK7ec38454875ea9868e819818f59288f11898149c FOREIGN KEY (Транзакция) REFERENCES Транзакция; 
CREATE INDEX Index7ec38454875ea9868e819818f59288f11898149c on Посылка (Транзакция); 

 ALTER TABLE Ячейка ADD CONSTRAINT FK315a841edee8638d2a3bce90f5bdedb60f7e361c FOREIGN KEY (Транзакция) REFERENCES Транзакция; 
CREATE INDEX Index315a841edee8638d2a3bce90f5bdedb60f7e361c on Ячейка (Транзакция); 

 ALTER TABLE Ячейка ADD CONSTRAINT FK3daa13c364072a9286fcdd9d80ad7d0a331e36a6 FOREIGN KEY (Постамат) REFERENCES Постамат; 
CREATE INDEX Index3daa13c364072a9286fcdd9d80ad7d0a331e36a6 on Ячейка (Постамат); 

 ALTER TABLE Постамат ADD CONSTRAINT FKba0a3b6be2ab1dd7d247715ca0d2dab8b7d5d6d4 FOREIGN KEY (СлужбаДоставки) REFERENCES СлужбаДоставки; 
CREATE INDEX Indexba0a3b6be2ab1dd7d247715ca0d2dab8b7d5d6d4 on Постамат (СлужбаДоставки); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

