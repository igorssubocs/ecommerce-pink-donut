import Button from '../button/Button'

const Modal = ({ isOpen, onClose, onConfirm, title, message }) => {
	if (!isOpen) return null

	return (
		<>
			<div onClick={onClose} className="fixed inset-0 bg-black/50" />
			
			<div className="fixed inset-0 z-50 flex items-center justify-center">
				<div className="bg-white rounded-3xl max-w-md w-full p-7 space-y-5">
					<h3 className="text-xl font-bold">{title}</h3>
					<p className="text-gray-500">{message}</p>
					<div className="flex gap-2">
						<Button
							onClick={onClose}
							className="flex-1 border border-gray-200 rounded-2xl hover:bg-gray-50"
						>
							Cancel
						</Button>
						<Button
							onClick={onConfirm}
							className="flex-1 bg-pink-400 text-white rounded-2xl hover:bg-pink-500"
						>
							Delete
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal