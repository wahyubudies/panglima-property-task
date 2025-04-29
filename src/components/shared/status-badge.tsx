import React from 'react';
import { Badge } from '@/components/ui/badge';

type StatusVariant = 'pending' | 'warning' | 'success' | 'info' | 'default';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const getVariantFromStatus = (status: string): StatusVariant => {
  if (!status) {
    return 'default';
  }

  const statusMap: Record<string, StatusVariant> = {
    'Tertunda': 'pending',
    'Menunggu': 'warning',
    'Diproses': 'info',
    'Selesai': 'success',
  };

  return statusMap[status] || 'default';
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variant = getVariantFromStatus(status);

  return (
    <Badge variant={variant} className={className}>
      {status}
    </Badge>
  );
}