import { useEffect } from "react";
import type { Soal } from "@gameedu/types";

interface ConfirmDialogProps {
  soal: Soal;
  onBatal: () => void;
  onKonfirmasi: () => void;
}

export default function ConfirmDialog({
  soal,
  onBatal,
  onKonfirmasi,
}: ConfirmDialogProps) {
  useEffect(() => {
    const tutupDenganEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onBatal();
    };
    window.addEventListener("keydown", tutupDenganEscape);
    return () => window.removeEventListener("keydown", tutupDenganEscape);
  }, [onBatal]);

  return (
    <div
      className="modal-overlay"
      onClick={onBatal}
      role="dialog"
      aria-modal="true"
      aria-label="Konfirmasi hapus soal"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Hapus soal ini?</h2>
        <p className="modal-desc">
          Soal yang dihapus tidak bisa dikembalikan.
        </p>
        <div className="modal-soal">{soal.pertanyaan}</div>
        <p className="modal-meta">
          {soal.mapel} · {soal.materi} · Kelas {soal.kelas}
        </p>
        <div className="modal-actions">
          <button type="button" className="btn-secondary" onClick={onBatal}>
            Batal
          </button>
          <button
            type="button"
            className="btn-danger"
            onClick={onKonfirmasi}
            autoFocus
          >
            Hapus Soal
          </button>
        </div>
      </div>
    </div>
  );
}
