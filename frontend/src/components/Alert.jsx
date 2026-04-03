export function Alert({ title, description, children, type = 'warning' }) {
    const typeStyles = {
        warning: 'bg-yellow-500/10 border-yellow-500/20',
        danger: 'bg-red-500/10 border-red-500/20',
        success: 'bg-green-500/10 border-green-500/20',
        safe: 'bg-green-500/10 border-green-500/20',
    };

    const style = typeStyles[type] || typeStyles.warning;

    return (
        <div className={`${style} rounded-lg p-4 border flex items-center justify-between transition-colors`}>
            <div>
                <div className='text-lg font-medium'>{title}</div>
                {description && <div className='text-sm opacity-70 mt-1'>{description}</div>}
            </div>
            {children && <div className='ml-4 shrink-0'>{children}</div>}
        </div>
    )
}
