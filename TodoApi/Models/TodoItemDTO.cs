namespace TodoApi.Models
{
    public record TodoItemDTO
    {
        public long Id { get; init; }
        public string Name { get; init; }
        public bool IsComplete { get; init; }
    }
}
