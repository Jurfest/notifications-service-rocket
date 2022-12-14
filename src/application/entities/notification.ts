export interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  createdAt: Date;
  readAt?: Date | null;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  get recipientId(): string {
    return this.props.recipientId;
  }

  set content(content: string) {
    this.props.content = content;
  }

  get content(): string {
    return this.props.content;
  }

  set category(category: string) {
    this.props.category = category;
  }

  get category(): string {
    return this.props.category;
  }

  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  set readAt(readAt: Date | null) {
    this.props.readAt = readAt;
  }

  get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
}
