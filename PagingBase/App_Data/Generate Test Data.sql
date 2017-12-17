--循环插入数据
declare @i int=0
while @i<320
begin
set @i=@i+1;
declare @str nvarchar(50)=convert(nvarchar(50),@i);
insert into dbo.PagingData values(@i,'A'+@str,'B'+@str,'C'+@str)
end

select * from PagingData

truncate table pagingdata