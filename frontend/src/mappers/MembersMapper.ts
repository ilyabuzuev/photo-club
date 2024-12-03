import type { MembersDTO } from '@/dto/members.dto';
import { MemberEntity } from '@/entities/member/MemberEntity';

export function membersMapper(dto: MembersDTO[]): MemberEntity[] {
  const members: MemberEntity[] = dto.map(member => {
    return new MemberEntity({
      id: member.id,
      name: member.name,
      email: member.email,
    });
  });

  return members;
}
