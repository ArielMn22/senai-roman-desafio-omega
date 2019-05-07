use ROMAN_OMEGA

bulk insert PROJETOS
FROM 'C:\db\projetoss.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2 
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
	);

bulk insert EQUIPES
FROM 'C:\db\equipes.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2 
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
	);


bulk insert TIPO_USUARIO
FROM 'C:\db\tipo_usuario.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2 
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
	);

bulk insert TEMAS
FROM 'C:\db\temas.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2 
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
	);

bulk insert USUARIOS
FROM 'C:\db\usuariosRoman.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2 
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
	);

bulk insert USUARIO_EQUIPE
FROM 'C:\db\usuario_equipe.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2 
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
	);


