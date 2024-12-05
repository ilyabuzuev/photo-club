import { api } from '@/api/API';
import { membersMapper } from '@/mappers/MembersMapper';
import { memberMapper } from '@/mappers/MemberMapper';
import type { MembersDTO } from '@/dto/members.dto';
import type { MemberDTO } from '@/dto/member.dto';
import type { MemberEntity } from '@/entities/member/MemberEntity';

export class MembersService {
  private static URLs = {
    allMembers: '/user/all',
    memberByEmail: '/user/',
  };

  async getAll(): Promise<MemberEntity[]> {
    try {
      const response = await api.get<MembersDTO[]>(
        MembersService.URLs.allMembers,
        {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
        },
      );

      if (response.status !== 200) {
        throw new Error('Ошибка при загрузке участников');
      }

      return membersMapper(response.data);
    } catch (error) {
      throw new Error(`ошибка ${error}`);
    }
  }

  async getByEmail(email: string): Promise<MemberEntity> {
    try {
      const response = await api.get<MemberDTO>(
        `${MembersService.URLs.memberByEmail}${email}`,
        {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
        },
      );

      if (response.status !== 200) {
        throw new Error('Ошибка при загрузке участников');
      }

      return memberMapper(response.data);
    } catch (error) {
      throw new Error(`ошибка ${error}`);
    }
  }
}
