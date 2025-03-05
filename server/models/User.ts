import { t } from 'elysia'

export const UserModel = t.Object({
    // Thông tin cơ bản
    id: t.Number(),
    username: t.String({
        minLength: 3,
        maxLength: 50,
        pattern: '^[a-zA-Z0-9_]+$' // Only alphanumeric and underscore
    }),
    email: t.String({
        format: 'email'
    }),
    password: t.String({
        minLength: 8,
        pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])' // At least one lowercase, uppercase, number, and special character
    }),

    // Hồ sơ người dùng
    displayName: t.Optional(t.String({
        maxLength: 100
    })),
    profilePicture: t.Optional(t.String({
        format: 'uri'
    })),
    bio: t.Optional(t.String({
        maxLength: 500
    })),

    // Cài đặt và quyền
    role: t.Enum({
        OWNER: 'owner',
        ADMIN: 'admin',
        MEMBER: 'member',
        GUEST: 'guest'
    }),
    permissions: t.Array(t.String()),

    // Workspace liên quan
    currentWorkspaceId: t.Optional(t.Number()),
    workspaces: t.Array(t.Object({
        id: t.Number(),
        role: t.String(),
        joinedAt: t.Date()
    })),

    // Cài đặt người dùng
    preferences: t.Object({
        theme: t.Optional(t.String()),
        language: t.Optional(t.String()),
        notifications: t.Object({
            email: t.Boolean(),
            inApp: t.Boolean()
        })
    }),

    // Bảo mật và xác thực
    twoFactorEnabled: t.Boolean(),
    lastLogin: t.Optional(t.Date()),

    // Theo dõi hoạt động
    createdAt: t.Date(),
    updatedAt: t.Date(),

    // OAuth và tích hợp
    googleId: t.Optional(t.String()),
    microsoftId: t.Optional(t.String()),

    // Trạng thái tài khoản
    isActive: t.Boolean(),
    isSuspended: t.Boolean(),
    suspendedUntil: t.Optional(t.Date())
})

// Model cho việc đăng ký người dùng
export const UserRegistrationModel = t.Object({
    email: t.String({ format: 'email' }),
    password: t.String({
        minLength: 8,
        pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])'
    }),
    username: t.String({
        minLength: 3,
        maxLength: 50,
        pattern: '^[a-zA-Z0-9_]+$'
    }),
    inviteCode: t.Optional(t.String())
})

// Model cho việc đăng nhập
export const UserLoginModel = t.Object({
    email: t.String({ format: 'email' }),
    password: t.String(),
    rememberMe: t.Optional(t.Boolean())
})

// Model cho việc cập nhật hồ sơ
export const UserUpdateModel = t.Partial(UserModel)