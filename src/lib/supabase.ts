import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://ynslukfafskvyzicypmx.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inluc2x1a2ZhZnNrdnl6aWN5cG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4MTczOTYsImV4cCI6MjAzNTM5MzM5Nn0.iGsIF0wx0HOFgE_8lgFVgs0RjNsvv3AkTm_GcDIoI_0'
);
