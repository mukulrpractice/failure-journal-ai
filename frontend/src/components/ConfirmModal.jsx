function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-6 animate-fade-in">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
            ⚠️
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center text-2xl font-bold text-slate-800">
          {title}
        </h2>

        {/* Message */}
        <p className="mt-3 text-center text-slate-600 leading-7">
          {message}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default ConfirmModal;