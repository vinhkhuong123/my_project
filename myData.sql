USE [master]
GO
/****** Object:  Database [Mydata]    Script Date: 2/4/2024 9:40:58 AM ******/
CREATE DATABASE [Mydata]
GO
ALTER DATABASE [Mydata] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Mydata].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Mydata] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Mydata] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Mydata] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Mydata] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Mydata] SET ARITHABORT OFF 
GO
ALTER DATABASE [Mydata] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Mydata] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Mydata] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Mydata] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Mydata] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Mydata] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Mydata] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Mydata] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Mydata] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Mydata] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Mydata] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Mydata] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Mydata] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Mydata] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Mydata] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Mydata] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Mydata] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Mydata] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Mydata] SET  MULTI_USER 
GO
ALTER DATABASE [Mydata] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Mydata] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Mydata] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Mydata] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Mydata] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Mydata]
GO
/****** Object:  Table [dbo].[product]    Script Date: 2/4/2024 9:40:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[product](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[product_name] [nvarchar](200) NULL,
	[product_price] [int] NULL,
	[product_details] [ntext] NULL,
	[product_rate] [int] NULL,
	[img] [varchar](500) NULL,
 CONSTRAINT [PK_product] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[users]    Script Date: 2/4/2024 9:40:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](50) NULL,
	[password] [varchar](50) NULL,
 CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[product] ON 

GO
INSERT [dbo].[product] ([id], [product_name], [product_price], [product_details], [product_rate], [img]) VALUES (2, N'Samsung Galaxy S24 Ultra 12GB 256GB', 27990, N'Mở khoá giới hạn tiềm năng với AI - Hỗ trợ phiên dịch cuộc gọi, khoanh vùng tìm kiếm, Trợ lí Note và chình sửa anh', 5, N'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png')
GO
INSERT [dbo].[product] ([id], [product_name], [product_price], [product_details], [product_rate], [img]) VALUES (8, N'Xiaomi Redmi Note 13 6GB 128GB', 4590000, N' Bắt trọn khoảnh khắc - Cụm camera đến 108MP mạnh mẽ cùng khả năng thu phóng 3x', 5, N'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-13_1__1_1.png')
GO
INSERT [dbo].[product] ([id], [product_name], [product_price], [product_details], [product_rate], [img]) VALUES (9, N'string', 0, N'string', 0, N'string')
GO
INSERT [dbo].[product] ([id], [product_name], [product_price], [product_details], [product_rate], [img]) VALUES (10, N'string', 0, N'string', 0, N'string')
GO
INSERT [dbo].[product] ([id], [product_name], [product_price], [product_details], [product_rate], [img]) VALUES (11, N'string', 0, N'string', 0, N'string')
GO
INSERT [dbo].[product] ([id], [product_name], [product_price], [product_details], [product_rate], [img]) VALUES (12, N'string', 0, N'string', 0, N'string')
GO
SET IDENTITY_INSERT [dbo].[product] OFF
GO
SET IDENTITY_INSERT [dbo].[users] ON 

GO
INSERT [dbo].[users] ([id], [username], [password]) VALUES (1, N'vinh', N'1')
GO
INSERT [dbo].[users] ([id], [username], [password]) VALUES (2, N'giang', N'1')
GO
INSERT [dbo].[users] ([id], [username], [password]) VALUES (3, N'dung', N'1')
GO
SET IDENTITY_INSERT [dbo].[users] OFF
GO
USE [master]
GO
ALTER DATABASE [Mydata] SET  READ_WRITE 
GO
