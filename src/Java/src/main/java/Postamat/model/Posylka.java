package Postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Посылка
 */
@Entity(name = "IISPostamatПосылка")
@Table(schema = "public", name = "Посылка")
public class Posylka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Статус")
    private String статус;

    @Column(name = "Отправитель")
    private String отправитель;

    @Column(name = "Получатель")
    private String получатель;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Logistika")
    @Convert("Logistika")
    @Column(name = "Логистика", length = 16, unique = true, nullable = false)
    private UUID _logistikaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Logistika", insertable = false, updatable = false)
    private Logistika logistika;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tranzakciya")
    @Convert("Tranzakciya")
    @Column(name = "Транзакция", length = 16, unique = true, nullable = false)
    private UUID _tranzakciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tranzakciya", insertable = false, updatable = false)
    private Tranzakciya tranzakciya;


    public Posylka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }

    public String getОтправитель() {
      return отправитель;
    }

    public void setОтправитель(String отправитель) {
      this.отправитель = отправитель;
    }

    public String getПолучатель() {
      return получатель;
    }

    public void setПолучатель(String получатель) {
      this.получатель = получатель;
    }


}