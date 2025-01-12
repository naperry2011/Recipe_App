export type Database = {
  public: {
    tables: {
      recipes: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          user_id: string
        }
        Insert: {
          title: string
          description: string
          user_id: string
        }
        Update: {
          title?: string
          description?: string
        }
      }
    }
  }
} 