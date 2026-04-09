using backend.DTOs;
using backend.Entities;
using backend.Enum;
using backend.Repositories;

namespace backend.Services
{
    public class EmotionService : IEmotionService
    {
        private readonly IEmotionRepository _repository;

        public EmotionService(IEmotionRepository repository)
        {
            _repository = repository;
        }

        public async Task<EmotionResponse> RegisterEmotionAsync(EmotionRequest request, Guid userId)
        {
            if (!System.Enum.TryParse<EmotionsEnum>(request.Mood, true, out var mood))
            {
                throw new ArgumentException("Invalid mood value");
            }

<<<<<<< HEAD
            // Enforce 8-hour interval between registrations
            var latest = await _repository.GetLatestAsync(userId);
            var now = DateTime.UtcNow;
            if (latest != null)
            {
                var diff = now - latest.CreatedAt;
                var minInterval = TimeSpan.FromHours(8);
                if (diff < minInterval)
                {
                    var remaining = minInterval - diff;
                    throw new InvalidOperationException($"Registro permitido a cada 8 horas. Tente novamente em {remaining.Hours}h {remaining.Minutes}m {remaining.Seconds}s.");
                }
            }

=======
>>>>>>> lucas/atualizando-table-users
            var log = new EmotionLog
            {
                Id = Guid.NewGuid(),
                UserId = userId,
                Emotion = mood,
<<<<<<< HEAD
                CreatedAt = DateTime.UtcNow,
                Diary = request.Diary
=======
                CreatedAt = DateTime.UtcNow
>>>>>>> lucas/atualizando-table-users
            };

            var added = await _repository.AddAsync(log);

            return new EmotionResponse
            {
                Id = added.Id,
                UserId = added.UserId,
                Mood = added.Emotion.ToString(),
                CreatedAt = added.CreatedAt
<<<<<<< HEAD
                ,Diary = added.Diary
=======
>>>>>>> lucas/atualizando-table-users
            };
        }

        public async Task<IEnumerable<EmotionResponse>> GetAllAsync(Guid userId)
        {
            var list = await _repository.GetByUserIdAsync(userId);
            return list.Select(e => new EmotionResponse
            {
                Id = e.Id,
                UserId = e.UserId,
                Mood = e.Emotion.ToString(),
                CreatedAt = e.CreatedAt
<<<<<<< HEAD
                ,Diary = e.Diary
=======
>>>>>>> lucas/atualizando-table-users
            });
        }

        public async Task<IEnumerable<EmotionResponse>> GetTodayAsync(Guid userId)
        {
            var list = await _repository.GetTodayAsync(userId);
            return list.Select(e => new EmotionResponse
            {
                Id = e.Id,
                UserId = e.UserId,
                Mood = e.Emotion.ToString(),
                CreatedAt = e.CreatedAt
<<<<<<< HEAD
                ,Diary = e.Diary
=======
>>>>>>> lucas/atualizando-table-users
            });
        }

        public async Task<IEnumerable<EmotionResponse>> GetThisWeekAsync(Guid userId)
        {
            var list = await _repository.GetThisWeekAsync(userId);
            return list.Select(e => new EmotionResponse
            {
                Id = e.Id,
                UserId = e.UserId,
                Mood = e.Emotion.ToString(),
                CreatedAt = e.CreatedAt
<<<<<<< HEAD
                ,Diary = e.Diary
=======
>>>>>>> lucas/atualizando-table-users
            });
        }
    }
}
