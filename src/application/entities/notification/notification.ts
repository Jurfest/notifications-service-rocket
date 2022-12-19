import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  createdAt: Date;
  canceledAt?: Date;
  readAt?: Date | null;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id(): string {
    return this._id;
  }

  set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  get recipientId(): string {
    return this.props.recipientId;
  }

  set content(content: Content) {
    this.props.content = content;
  }

  get content(): Content {
    return this.props.content;
  }

  set category(category: string) {
    this.props.category = category;
  }

  get category(): string {
    return this.props.category;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  cancel(): void {
    this.props.canceledAt = new Date();
  }

  get canceledAt(): Date {
    return this.props.canceledAt;
  }

  // set readAt(readAt: Date | null | undefined) {
  //   this.props.readAt = readAt;
  // }

  read() {
    this.props.readAt = new Date();
  }

  unread() {
    this.props.readAt = null;
  }

  get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
}
