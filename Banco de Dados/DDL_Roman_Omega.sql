CREATE DATABASE ROMAN_OMEGA

use ROMAN_OMEGA

CREATE TABLE EQUIPES(
		ID INT IDENTITY PRIMARY KEY,
		NOME VARCHAR(150) NOT NULL
);
CREATE TABLE TIPO_USUARIO(
		ID INT IDENTITY PRIMARY KEY,
		NOME VARCHAR(100)
);
CREATE TABLE TEMAS(
		ID INT IDENTITY PRIMARY KEY,
		NOME VARCHAR(200), 
		STATUS_ATIVO BIT DEFAULT (1)
);
CREATE TABLE USUARIOS(
		ID INT IDENTITY PRIMARY KEY,
		NOME VARCHAR(150),
		EMAIL VARCHAR(255) NOT NULL,
		SENHA VARCHAR(255) NOT NULL,
		ID_TIPO_USUARIO INT FOREIGN KEY REFERENCES TIPO_USUARIO(ID) 
);
CREATE TABLE USUARIO_EQUIPE(
		ID_USUARIO INT FOREIGN KEY REFERENCES USUARIOS(ID),
		ID_EQUIPE INT FOREIGN KEY REFERENCES EQUIPES(ID)
);
CREATE TABLE PROJETOS(
		ID INT IDENTITY PRIMARY KEY,
		NOME VARCHAR(150) NOT NULL,
		ID_TEMA INT FOREIGN KEY REFERENCES TEMAS(ID),
		ID_USUARIO INT FOREIGN KEY REFERENCES USUARIOS(ID)
);

select * from USUARIOS

select * from PROJETOS

select * from EQUIPES

select * from TIPO_USUARIO

select * from TEMAS

select * from USUARIO_EQUIPE

