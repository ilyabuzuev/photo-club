import type { MemberDTO } from '@/dto/member.dto.ts';
import { MemberEntity } from '@/entities/member/MemberEntity';

export function memberMapper(dto: MemberDTO): MemberEntity {
  return new MemberEntity({
    id: dto.id,
    firstname: dto.firstname,
    lastname: dto.lastname,
    email: dto.email,
  });
}
