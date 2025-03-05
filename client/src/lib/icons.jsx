export function GoogleIcon(props) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
        </svg>
    )
}

export function FacebookIcon(props) {
    return (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
        </svg>
    )
}
export function NotionCube(props) {
    return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g transform="translate(15,15) scale(0.7)">
                {/* Cube face with N */}
                <path d="M10 10h80v80H10V10z" fill="currentColor" stroke="currentColor" strokeWidth="4" />
                {/* 3D effect - right side */}
                <path d="M90 10v80l15-15V25L90 10z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
                {/* 3D effect - top side */}
                <path d="M10 10l15-15h65l-15 15H10z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
                {/* Letter N */}
                <path d="M35 30v40h7.5L65 40v30h7.5V30H65L42.5 60V30H35z" fill="white" />
            </g>
        </svg>
    )
}