export default function Options({ handle, total, reset }) {
  return (
    <div>
      <button
        onClick={() => {
          handle('good');
        }}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => {
          handle('neutral');
        }}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={() => {
          handle('bad');
        }}
        type="button"
      >
        Bad
      </button>
      {total > 0 && (
        <button
          type="button"
          onClick={() => {
            reset({
              good: 0,
              neutral: 0,
              bad: 0,
            });
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
