namespace TodoApi.Models
{
    public record TodoItem
    {
        public long Id { get; init; }
        public string Name { get; init; }
        public bool IsComplete { get; init; }
        public string Secret { get; init; }
    }    
}
