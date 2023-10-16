export function usePasswordStrengthCheck() {
    const checkPasswordStrength = (password) => {
        if (password.length < 8) {
            return 'Weak (too short)';
        } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
            return 'Weak (lacks complexity)';
        }
        return 'Strong';
    };

    return checkPasswordStrength;
}
